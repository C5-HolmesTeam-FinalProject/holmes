import db
import json
from sodapy import Socrata

def get_data():
    """
    This functions gets the data from JSON
    """
    with open(r".\cities\colombia.json") as json_file:
        cities = json.load(json_file)

    return cities

def parser_data(data):
    """
    This function parse the data from the JSON
    """
    states = []
    
    for value in data:
        states.append(value)
    
    dictionary = [{
        'country': 'Colombia',
        'code': 'CO',
        'states': states
    }]

    return dictionary

def main():
    data = get_data()

    parse_json = parser_data(data)

    db.insert_cities(parse_json)

if __name__ == "__main__":
    main()
    