const camelize=(str) =>str
.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/)
.reduce((res,word,i)=>{
    return word===''?res: res.concat( i>0?word[0].toUpperCase():word[0].toLowerCase() , word.slice(1))
  },'')

  const pascalize=(str) =>str
.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/)
.reduce((res,word)=>{
    return word===''?res:res.concat( word[0].toUpperCase(),word.slice(1))
  },'')

  module.exports = {
  camelize,
  pascalize
  };
