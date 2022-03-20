const jwt = require("jsonwebtoken");

export const verifyToken = (req: any, res:any, next:any) => {
  const authHeader = req.headers.token;
  if (authHeader) {
      const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err: any,user: any) => {
        if(err) res.status(401).json({message: "Invalid token"});
        req.user = user;
        next();
    })
    
  } else {
    res.status(401).json({ message: "You are not authenticated" });
  }
}

export const verifyTokenAuthorization = (req: any, res:any, next:any) => {
verifyToken(req,res,()=>{
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
        res.status(403).json({message: "You are not allowed"})
    }
})
}

export const verifyTokenAndAdmin = (req: any, res:any, next:any) => {
    verifyToken(req,res,()=>{
        if(req.user.isAdmin) {
            next()
        }else{
            res.status(403).json({message: "You are not allowed"})
        }
    })
    }