import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link to="/" className='text-primary-100 font-semibold text-3xl select-none'>Md. <span className='text-secondary'>Shakib</span> Mia</Link>;
};

export default Logo;