# get_earthquakes.py
# This program will fetch data from the USGS servers.
# We can show or create files with information about
# the biggest earthquakes in the past week.

# First, we import modules that we'll use in our program. These specific ones will
# enable us to download files from the internet and to process dates, which
# make sense to humans but are tricky for computers
import requests
import datetime
import json

# Then we build a URL that will instruct the USGS web servers to send us the
# data we want - all the earthquakes in the past week, in descending order.
today = datetime.date.today()
last_week = today - datetime.timedelta(days=7)
last_week_string = str(last_week.year) + '-' + str(last_week.month) + '-' + str(last_week.day)
query = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=magnitude&starttime=' + last_week_string

# With this line our computer sends an HTTP request to usgs.gov and listens for a
# response, which will (if successful) contain the information we want
earthquakes = requests.get(url=query).json()

# We can either print this information or write it to a file.
# Now we take that information and pull out the actual data we will use in our output.
biggest_quake = earthquakes['features'][0]
place = biggest_quake['properties']['place']
timestamp = biggest_quake['properties']['time']
date_object = datetime.datetime.fromtimestamp(timestamp / 1000)
time = date_object.strftime('%H:%M')
date = date_object.day
day = date_object.weekday()
month = date_object.month
scale = biggest_quake['properties']['mag']
place = biggest_quake['properties']['place']
weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

# Finally we build our output string ...
output = '''The largest earthquake from this past week happened at %s on %s the %d of %s.
It was measured at %d on the Richter scale %s.''' % (time, weekdays[day], date, month, scale, place)

# ... and print it out!
print(output)

# then write it to a file!
with open('../visualize/data/earthquakes.json', 'w') as file:
    json.dump(earthquakes, file);
