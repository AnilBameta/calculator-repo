export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\\n/; // default delimiters
  
    if (numbers.startsWith('//')) {
      const parts = numbers.split("\\n");
      const customDelimiter = parts[0].substring(2); // strip //
      delimiter = new RegExp(customDelimiter);
      numbers = parts.slice(1).join('\n'); // the rest after the delimiter declaration
    }
  
    const tokens = numbers.split(delimiter).map(n => n.trim()).filter(n => n !== '');
    const numList = tokens.map(Number);
  
    const negatives = numList.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numList.reduce((sum, num) => sum + num, 0);
  }
  