import requests
import random
import names
import json
import re
import lxml.html as html
from connection import connection

def get_info(links):
    #Save the property data
    data = []
    
    print('Obtaining properties for sale, please wait...')
    for link in links:
        #Get the URL
        response = requests.get(link)

        if response.status_code == 200:
            
            home = response.content.decode('utf-8')
            #Parse the home content to use Xpath
            parsed = html.fromstring(home)

            #Generate random contact number and name
            contact_name = names.get_full_name()
            contact_phone = random.randint(3100000000, 3209999999)

            #Get all the info
            country = "Colombia"
            currency = "COP"
            type_property_origin = parsed.xpath('//div[@class="box"]/h1/text()')
            status_property = "Venta"
            city = parsed.xpath('//div[@class="box"]/h1/span/text()')
            price = parsed.xpath('//div[@class="price"]/h2/text()')
            image_url = parsed.xpath('//div[@class="photo"]/a/img[@id="bigPhoto"]/@src')  
            description = parsed.xpath('//div[@class="description"]//p/text()')               

            area_origin = parsed.xpath('//span[@class="advertSurface"]/text()')
            bedrooms_origin = parsed.xpath('//span[@class="advertRooms"]/text()')
            bathrooms_origin = parsed.xpath('//span[@class="advertBaths"]/text()')
            garage_origin = parsed.xpath('//span[@class="advertGarages"]/text()')
            price_meter_origin = parsed.xpath('//ul[@class="boxcube"]//li//b[contains(text(),"Precio")]/following-sibling::text()')
            stratum_origin = parsed.xpath('//ul[@class="boxcube"]//li//b[contains(text(),"Estrato")]/following-sibling::text()')
            condition_origin = parsed.xpath('//ul[@class="boxcube"]//li//b[contains(text(),"Estado")]/following-sibling::text()') 
            antiquity_origin = parsed.xpath('//ul[@class="boxcube"]//li//b[contains(text(),"Antig")]/following-sibling::text()') 

            #Cleaning the data obtained
            area = re.findall(r"[\d*,.]{2,10}", area_origin[1])
            type_property = re.findall(r"[A-Z][a-z]{3,12}", type_property_origin[0])[0]
            
            #Check if has bedrooms
            if not bedrooms_origin or re.findall("Sin especificar", bedrooms_origin[1]):
                bedrooms = "unspecified"
            else:
                bedrooms = re.findall(r"[\d*]", bedrooms_origin[1])

            #Check if has bathrooms
            if not bathrooms_origin or re.findall("Sin especificar", bathrooms_origin[1]):
                bathrooms = "unspecified"
            else:
                bathrooms = re.findall(r"[\d*]", bathrooms_origin[1])
            
            #Check if has garage
            if not garage_origin or re.findall("Sin especificar", garage_origin[1]):
                garage = "unspecified"
            else:
                garage = re.findall(r"[\d*]", garage_origin[1])

            #Check price per square meter
            if not price_meter_origin:
                price_per_meter = "unspecified"
            else:
                price_per_meter = re.findall(r"[\d*,.]{2,20}", price_meter_origin[0])
            
            #Check the stratum
            if not stratum_origin:
                stratum = "unspecified"
            else:
                stratum = re.findall(r"[\d*]", stratum_origin[0])

            #Check condition
            if not condition_origin:
                condition = "unspecified"
            else:
                condition = re.findall(r"\w{2,}", condition_origin[0])

            #Check antiquity
            if not antiquity_origin:
                antiquity = "unspecified"
            else:
                antiquity = re.findall(r"[A-Z\da-zñáéíóú].*", antiquity_origin[0])
            
            #Adding the data to the list
            data.append({
                "type": ''.join(type_property),
                "status": status_property,
                "country": country,
                "city": ''.join(city),
                "price": ''.join(price).replace('$','').replace(' ',''),
                "currency": currency,
                'description': ''.join(description),
                "image": ''.join(image_url),
                "url": link,
                "contact-name": contact_name,
                "contact-phone": contact_phone,
                "features":{
                    "area": ''.join(area),
                    "bedrooms": ''.join(bedrooms),
                    "bathrooms": ''.join(bathrooms),
                    "garage": ''.join(garage),
                    "stratum": ''.join(stratum),
                    "condition": ''.join(condition),
                    "price_per_square_meter": ''.join(price_per_meter),
                    "antiquity": ''.join(antiquity)
                }
            })

        else:
            print(f'Could not access to the link {link}')
        
    print(f'{len(data)} data out of {len(links)} have been processed.')
 
    return data

def get_property_sale():

    #Start the connection with the URL to scrape
    new_connection = connection(type="venta")

    #Get the properties for sale
    propery_for_sale = get_info(new_connection)

    #Export the data to JSON file
    json_sale = json.dumps(propery_for_sale, ensure_ascii=False)
    
    with open(r".\json\property_sale.json", "w") as json_file:
        json_file.write(json_sale)
    
if __name__ == "__main__":
    get_property_sale()
    