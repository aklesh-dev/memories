import jwt from 'jsonwebtoken';


const auth = async (req, res, next) => {
    // try {
    //     const token = req.header('Authorization').replace('Bearer ', '');
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    try {
        // console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
            
        }
        else{
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        
        next();
    } catch (error) {
        console.log(error);        
    }
}

export default auth;