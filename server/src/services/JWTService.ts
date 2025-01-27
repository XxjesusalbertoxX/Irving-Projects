import jwt from 'jsonwebtoken';

class JwtService{
    generateToken(user:any){
        return jwt.sign(
            {
                id: user.id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'}
        );
    }
}

export default new JwtService();