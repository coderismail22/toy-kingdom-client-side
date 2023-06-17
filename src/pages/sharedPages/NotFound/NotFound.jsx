
import { Link } from 'react-router-dom';
import notFoundImg from '../../../assets/404.jpg'
const NotFoundPage = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div>
        <img className="md:max-w-lg" src={notFoundImg} alt="404" />
        <button className='btn btn-primary btn-block' ><Link to='/'>Go Back</Link></button>
        </div>
        
      </div>
    );
  };
  
  export default NotFoundPage;
  