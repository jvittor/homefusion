import Image from 'next/image';

import StepProgressBar from '../StepProgressBar';

const LoginPage = () => (
  <div className="h-xl flex flex-col bg-home-bg bg-cover px-20 sm:flex-row">
    {/* Formulário de login */}
    <div className="flex w-full items-center justify-center text-black-200 lg:w-9/12">
      <div className="grid w-full gap-5 px-2">
        <h2 className="text-left text-6xl font-bold">
          Encontre as melhores <a className="text-blue">oportunidades</a> de
          investimento hoje!
        </h2>
        <StepProgressBar />
      </div>
    </div>
    <div className="hidden w-1/2 justify-end lg:flex">
      <Image
        src="https://homefusion.s3.sa-east-1.amazonaws.com/House+searching-bro+1.png"
        alt="Imagem"
        width={500}
        height={500}
      />
    </div>
  </div>
);

export default LoginPage;
