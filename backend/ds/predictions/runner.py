import argparse
import os
import sys
import json

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

import pandas as pd

from flask import Flask
from flask import request, jsonify

from pymongo import MongoClient

app = Flask(__name__)

def simcity(df):
    grouped = df.groupby(['state','city'])
    for name, group in grouped:
        group2 = group.astype({'price':'str', 'area':'str', 'buildarea':'str', 'bedrooms':'str', 
        'bathrooms':'str', 'garage':'str', 'price_per_square_meter':'str', 'antiquity':'str', 
        'idzone':'str', 'lat':'str', 'lng':'str', 'gym':'str', 'multip-room':'str', 'pool':'str', 
        'nearschools':'str', 'nearmalls':'str'})

        group2 = group2.reset_index(drop=True)

        group2['concat'] = pd.Series(group2[['type', 'price', 'area', 'buildarea', 'bedrooms', 'bathrooms', 
        'garage', 'condition', 'price_per_square_meter', 'antiquity', 'address', 'idzone',
        'lat', 'lng', 'gym', 'multip-room', 'pool', 'nearschools',
        'nearmalls']].values.tolist()).str.join(' ')

        vectorizer = CountVectorizer()
        counts = vectorizer.fit_transform(group2['concat'])
        similarity = cosine_similarity(counts)

        for index, row in group2.iterrows():
            if len(similarity) >= 11:
                similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:11]
            else:
                similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:]

            aux = dict()
            for idx, i in enumerate(similars):
                aux[idx+1] = int(group2.iloc[i[0]]['_id'])

            df.loc[df['_id']==row['_id'],'simcity'] = json.dumps(aux) 
    return df

def simstate(df):
    grouped = df.groupby(['state'])

    for name, group in grouped:
        group2 = group.astype({'price':'str', 'area':'str', 'buildarea':'str', 'bedrooms':'str', 'bathrooms':'str', 
        'garage':'str', 'price_per_square_meter':'str', 'antiquity':'str', 'idzone':'str', 'lat':'str', 'lng':'str', 
        'gym':'str', 'multip-room':'str', 'pool':'str', 'nearschools':'str', 'nearmalls':'str'})
        
        group2 = group2.reset_index(drop=True)
        
        group2['concat'] = pd.Series(group2[['type', 'price', 'area', 'buildarea', 'bedrooms', 'bathrooms', 
        'garage', 'condition', 'price_per_square_meter', 'antiquity', 'address', 'idzone',
        'lat', 'lng', 'gym', 'multip-room', 'pool', 'nearschools',
        'nearmalls']].values.tolist()).str.join(' ')

        vectorizer = CountVectorizer()
        counts = vectorizer.fit_transform(group2['concat'])
        similarity = cosine_similarity(counts)

        for index, row in group2.iterrows():
            if len(similarity) >= 11:
                similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:11]
            else:
                similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:]

            aux = dict()
            for idx, i in enumerate(similars):
                aux[idx+1] = int(group2.iloc[i[0]]['_id'])
            df.loc[df['_id']==row['_id'],'simstate'] = json.dumps(aux)
    return df

def simcountry(df):
    group2 = df.astype({'price':'str', 'area':'str', 'buildarea':'str', 'bedrooms':'str', 'bathrooms':'str', 
    'garage':'str', 'price_per_square_meter':'str', 'antiquity':'str', 'idzone':'str', 'lat':'str', 'lng':'str', 
    'gym':'str', 'multip-room':'str', 'pool':'str', 'nearschools':'str', 'nearmalls':'str'})

    group2['concat'] = pd.Series(group2[['type', 'price', 'area', 'buildarea', 'bedrooms', 'bathrooms', 
    'garage', 'condition', 'price_per_square_meter', 'antiquity', 'address', 'idzone',
    'lat', 'lng', 'gym', 'multip-room', 'pool', 'nearschools',
    'nearmalls']].values.tolist()).str.join(' ')

    vectorizer = CountVectorizer()
    counts = vectorizer.fit_transform(group2['concat'])
    similarity = cosine_similarity(counts)

    for index, row in group2.iterrows():
        if len(similarity) >= 11:
            similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:11]
        else:
            similars = sorted(enumerate(similarity[index]), key=lambda x: x[1], reverse=True)[1:]

        aux = dict()
        for idx, i in enumerate(similars):
            aux[idx+1] = int(group2.iloc[i[0]]['_id'])
        df.loc[df['_id']==row['_id'],'simcountry'] = json.dumps(aux)
    return df

def avgprices(data):
    data['avgprice'] = data.groupby(['state','city'])['price'].transform('mean')
    data['percent'] = ((data['price']/data['avgprice'])-1)*100
    return data

def querydb(col):
    client = MongoClient('mongodb+srv://backend:WvtTqCuH3nNkS5SL@holmes.ieany.mongodb.net/')
    db = client.holmes
    collection = db[col]
    data = pd.DataFrame(list(collection.find()))
    try:
        data = data.drop(['index'], axis=1)
        data.reset_index(inplace=True)
    except:
        return
    return data

def updatedb(data, col):
    data.reset_index(inplace=True)
    data_dict = data.to_dict('records')

    client = MongoClient('mongodb+srv://backend:WvtTqCuH3nNkS5SL@holmes.ieany.mongodb.net/')
    db = client.holmes
    collection = db[col]
    
    for row in data_dict:
        try:
            print(row)
            collection.update_one({"_id": row["_id"]}, {"$set":{"avgprice":row['avgprice'], "percent":row['percent'], "simcity":row['simcity'], "simstate":row['simstate'], "simcountry":row['simcountry']}})
        except Exception as e:
            pass

@app.route('/', methods=['GET'])
def home():
    return "Homepage"


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404




if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Choose what function to run.')

    parser.add_argument('function', type=str, help='Run the given function')

    args = parser.parse_args()

    if args.function == 'update_models':
        collection = 'saleMX'
        print('Querying data')
        print('-'*80)
        data2 = querydb(collection)
        print('Average prices per group')
        print('-'*80)
        data = avgprices(data2)
        print('Recommendations in city')
        print('-'*80)
        data = simcity(data)
        print('Recommendations in state')
        print('-'*80)
        data = simstate(data)
        print('Recommendations in country')
        print('-'*80)
        data = simcountry(data)
        
        if data2.equals(data):
            print('Skip:','\n','Data up to date!!!')
        else:
            print('Updating database')
            print('-'*80)
            updatedb(data, collection)

    elif args.function == 'server':
        app.run(port=27000)
    else:
        print(f'{args.function} does not exist')