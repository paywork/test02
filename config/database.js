const mongoose = require('mongoose')

//데이터베이스 연결
const dbaddress = "mongodb+srv://admin:admin1234@cluster0.jqtlj.mongodb.net/test02?retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true

}
mongoose
    .connect(dbaddress, options)
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err.message))

