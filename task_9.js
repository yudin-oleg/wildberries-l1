// конвертировать JSON в строку
function convertJsonToString(obj) {
    if (typeof obj === 'undefined') {
      return 'undefined';
    }
  
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      return String(obj);
    }
  
    if (typeof obj === 'string') {
      return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    }
  
    if (Array.isArray(obj)) {
      const arrayString = obj.map(item => convertJsonToString(item)).join(',');
      return `[${arrayString}]`;
    }
  
    if (typeof obj === 'object') {
      const objectString = Object.entries(obj)
        .map(([key, value]) => `"${key}":${convertJsonToString(value)}`)
        .join(',');
      return `{${objectString}}`;
    }
  
    return undefined;
  }
  
  // тестирование
  const exampleObject = { key: "value", number: 42, nested: { prop: "nestedValue" } };
  const arrayToString = [1, 2, "hello", 65];
  
  const jsonString = convertJsonToString(exampleObject);
  console.log(jsonString);