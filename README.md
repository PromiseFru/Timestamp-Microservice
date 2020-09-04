## Timestamp-Microservice

1. The API endpoint is GET [project_url]/api/timestamp/:date_string?

2. A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

4. If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

5. If the date string is invalid the api returns a JSON having the structure
{"error" : "Invalid Date" }.

## Problem Explanation

* You need to write a microservice that will return a JSON with the date in Unix format and in a human-readable date format. The JSON format is like the example output, “{“unix”:1451001600000, “utc”:“Fri, 25 Dec 2015 00:00:00 GMT”}”.

* The response depends on the URL. If the API endpoint is hit with no additional information, it returns the JSON with the current time.

* If the endpoint is hit with a date in unix format, it should calculate the human readable format, and vice versa.

## Reference docs
* Regular expressions:
> https://eloquentjavascript.net/09_regexp.html