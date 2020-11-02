import requests
from bs4 import BeautifulSoup as bs

def connection(type="venta"):
    """
    The type could be: venta, arriendos
    """
    
    url = 'https://www.fincaraiz.com.co/finca-raiz/' + type

    r = requests.get(url)

    #Create the BS
    soup = bs(r.text, 'html.parser')

    #Get the used estates
    ads = []
    for a in soup.find('div', attrs={'id':'divAdverts'}).find_all('ul'):
        if a.find('div', attrs={'class':'usedMark'}):
            ads.append(a)

    #Get the links
    links = [ad.find('a').get('href') for ad in ads]

    #Parsing the links
    parsed_links = [('https://www.fincaraiz.com.co') + x for i, x in enumerate(links)]

    return parsed_links
