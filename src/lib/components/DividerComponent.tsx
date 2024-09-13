import { Divider } from '@nextui-org/react';

const DividerVertical = () => (
  <div className="relative z-10 flex items-center justify-center">
    <Divider
      orientation="vertical"
      className="absolute left-0"
      style={{
        backgroundColor: 'black',
        width: '5px',
        height: '50%',
        opacity: '20%',
      }}
    />
  </div>
);

const DividerHorizontal = () => (
  <Divider
    orientation="horizontal"
    className="absolute right-0"
    style={{
      backgroundColor: 'gray',
      width: '10px',
      height: '75%',
      opacity: '50%',
    }}
  />
);

interface DividerComponentProps {
  type: 'vertical' | 'horizontal';
}

function DividerComponent({ type }: DividerComponentProps) {
  return (
    <div className="relative z-10 flex w-full items-center justify-center">
      {type === 'vertical' && <DividerVertical />}
      {type === 'horizontal' && <DividerHorizontal />}
    </div>
  );
}

export default DividerComponent;
