const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getFormatArticle = (content, title, author)=> {
  return `<h2 style="text-align:center">${title}</h2>
        <div style="text-align:right;margin-right:10px">${author}</div>
        ${content}`;
}

module.exports = {
  formatTime: formatTime,
  getFormatArticle: getFormatArticle
}
