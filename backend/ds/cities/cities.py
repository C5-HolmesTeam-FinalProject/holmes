import json

with open('cities.json') as f:
    data = json.load(f)

# data

states = {
  "states": [
    {
      "id": "0",
      "key": "00",
      "name": "Todo México",
      "shortname": "mexico",
      "cities": []
    },
    {
      "id": "1",
      "key": "01",
      "name": "Aguascalientes",
      "shortname": "Ags.",
      "cities": []
    },
    {
      "id": "2",
      "key": "02",
      "name": "Baja California",
      "shortname": "BC",
      "cities": []
    },
    {
      "id": "3",
      "key": "03",
      "name": "Baja California Sur",
      "shortname": "BCS",
      "cities": []
    },
    {
      "id": "4",
      "key": "04",
      "name": "Campeche",
      "shortname": "Camp.",
      "cities": []
    },
    {
      "id": "5",
      "key": "05",
      "name": "Coahuila de Zaragoza",
      "shortname": "Coah.",
      "cities": []
    },
    {
      "id": "6",
      "key": "06",
      "name": "Colima",
      "shortname": "Col.",
      "cities": []
    },
    {
      "id": "7",
      "key": "07",
      "name": "Chiapas",
      "shortname": "Chis.",
      "cities": []
    },
    {
      "id": "8",
      "key": "08",
      "name": "Chihuahua",
      "shortname": "Chih.",
      "cities": []
    },
    {
      "id": "9",
      "key": "09",
      "name": "Distrito Federal",
      "shortname": "DF",
      "cities": []
    },
    {
      "id": "10",
      "key": "10",
      "name": "Durango",
      "shortname": "Dgo.",
      "cities": []
    },
    {
      "id": "11",
      "key": "11",
      "name": "Guanajuato",
      "shortname": "Gto.",
      "cities": []
    },
    {
      "id": "12",
      "key": "12",
      "name": "Guerrero",
      "shortname": "Gro.",
      "cities": []
    },
    {
      "id": "13",
      "key": "13",
      "name": "Hidalgo",
      "shortname": "Hgo.",
      "cities": []
    },
    {
      "id": "14",
      "key": "14",
      "name": "Jalisco",
      "shortname": "Jal.",
      "cities": []
    },
    {
      "id": "15",
      "key": "15",
      "name": "México",
      "shortname": "Mex.",
      "cities": []
    },
    {
      "id": "16",
      "key": "16",
      "name": "Michoacán de Ocampo",
      "shortname": "Mich.",
      "cities": []
    },
    {
      "id": "17",
      "key": "17",
      "name": "Morelos",
      "shortname": "Mor.",
      "cities": []
    },
    {
      "id": "18",
      "key": "18",
      "name": "Nayarit",
      "shortname": "Nay.",
      "cities": []
    },
    {
      "id": "19",
      "key": "19",
      "name": "Nuevo León",
      "shortname": "NL",
      "cities": []
    },
    {
      "id": "20",
      "key": "20",
      "name": "Oaxaca",
      "shortname": "Oax.",
      "cities": []
    },
    {
      "id": "21",
      "key": "21",
      "name": "Puebla",
      "shortname": "Pue.",
      "cities": []
    },
    {
      "id": "22",
      "key": "22",
      "name": "Querétaro",
      "shortname": "Qro.",
      "cities": []
    },
    {
      "id": "23",
      "key": "23",
      "name": "Quintana Roo",
      "shortname": "Q. Roo",
      "cities": []
    },
    {
      "id": "24",
      "key": "24",
      "name": "San Luis Potosí",
      "shortname": "SLP",
      "cities": []
    },
    {
      "id": "25",
      "key": "25",
      "name": "Sinaloa",
      "shortname": "Sin.",
      "cities": []
    },
    {
      "id": "26",
      "key": "26",
      "name": "Sonora",
      "shortname": "Son.",
      "cities": []
    },
    {
      "id": "27",
      "key": "27",
      "name": "Tabasco",
      "shortname": "Tab.",
      "cities": []
    },
    {
      "id": "28",
      "key": "28",
      "name": "Tamaulipas",
      "shortname": "Tamps.",
      "cities": []
    },
    {
      "id": "29",
      "key": "29",
      "name": "Tlaxcala",
      "shortname": "Tlax.",
      "cities": []
    },
    {
      "id": "30",
      "key": "30",
      "name": "Veracruz de Ignacio de la Llave",
      "shortname": "Ver.",
      "cities": []
    },
    {
      "id": "31",
      "key": "31",
      "name": "Yucatán",
      "shortname": "Yuc.",
      "cities": []
    },
    {
      "id": "32",
      "key": "32",
      "name": "Zacatecas",
      "shortname": "Zac.",
      "cities": []
    }
  ]
}

# for city in data['cities']:
#     # city['id']
#     states['states']['id'==city['state_id']]['cities'].append(city['name'])

for city in data['cities']:
    # city['id']
    for q in states['states']:
        print(q['id'])
        print(city['state_id'])
        if q['id'] == city['state_id']:
            states['states'][int(q['id'])]['cities'].append(city['name'])
            break


ready = json.dump(states)

for q in states['states']:
    q.pop('key',None)

states['states'].pop(0)


ready = dict()
ready['country'] = 'México'
ready['code'] = 'MX'
ready['states'] = states['states']

to_bd = json.dumps(ready)


text_file = open("citiesmx.json", "w")
n = text_file.write(to_bd)
text_file.close()