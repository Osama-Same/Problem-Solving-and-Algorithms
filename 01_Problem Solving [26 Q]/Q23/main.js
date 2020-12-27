console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/
//url.indexOf('?')
function parseQueryString(queryString ) {
  let p = {}, queries, temp,i,l;

  // Split into key/value pairs
  queries = queryString.split("&").indexOf('?')

  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      p[temp[0]] = temp[1];
  }

  return p;
}


/* 
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/