import '../styles/widget.css';

interface ContainerProps {
    text?: string;
    childOne: JSX.Element;
    childTwo: JSX.Element;
}

function Container({text, childOne, childTwo}: ContainerProps) {
  return (
    <div className='container'>
        <div className='container-header'>
          {text
            ? <p>{text}</p> 
            : null
          }
            {childOne} 
        </div>
        <div>
            {childTwo}
        </div>
    </div>
  );
}

export default Container;
