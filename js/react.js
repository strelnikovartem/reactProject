try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log('✅ This is fine, we handled parsing error in try...catch');

const data = JSON.parse('Well, this is awkward');

console.log(data);
