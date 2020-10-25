from pymongo import MongoClient
from pprint import pprint
import json

def connection():
    """
    This function connect to the MongoDB
    """
    client = MongoClient('mongodb+srv://backend:WvtTqCuH3nNkS5SL@holmes.ieany.mongodb.net/')
    db = client.holmes

    return db

def insert():
    new_conecction = connection()

    sale = new_conecction.sale
    rent = new_conecction.rent

    #Get the JSON document with the Values
    with open(r'.\json\property_sale.json') as json_file:
        property_sale = json.load(json_file)

    with open(r'.\json\property_rent.json') as json_file:
        property_rent = json.load(json_file)

    #Insert objects into MongoDB
    try:
        #Delete the Mongo documents, just for Test purpose
        """ print('Cleaning the BD...')
        sale.delete_many({})
        rent.delete_many({}) """

        #Insert new Values
        print('Inserting new values...')
        result = sale.insert_many(property_sale)
        print('Property for sale were successfully inserted in DB')

        result = rent.insert_many(property_rent)
        print('Property for rent were successfully inserted in DB')

    except NameError:
        print(f'No objects were inserted {NameError}')

if __name__ == "__main__":
    insert()