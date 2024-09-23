import { Button } from '@/components/ui/button';
import { grid } from 'ldrs';
import { useNavigate } from 'react-router-dom';

grid.register();

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className='flex flex-col w-dvw h-dvh box-border justify-center items-center bg-slate-500'>
      400 - Not Found!
      <l-grid size='150' speed='1.5' color='black'></l-grid>
      <Button onClick={() => handleGoHome}>Go back home</Button>
    </div>
  );
};

export default Error;
