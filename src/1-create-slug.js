// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  for(let i = 0; i < title.length; i++) {
    lowercase = title.toLowerCase().trim()
    if (lowercase.includes("!") || lowercase.includes("?") || lowercase.includes("#") ) {
      return null
    } else {
      return lowercase.replaceAll(" ", "-");
    }
  }
};

module.exports = {
  createSlug,
};
