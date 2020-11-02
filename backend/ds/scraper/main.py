import rent
import sale
import db

def main():
    #Get properties for rent
    rent.get_property_rent()
    print('\n')

    #Get properties for sale
    sale.get_property_sale()
    print('\n')

    #Insert the data in the DB
    db.insert()

if __name__ == "__main__":
    main()