import '../styles/widget.css';

interface ContainerProps {
    text?: string;
    headerContent: JSX.Element;
    mainContent: JSX.Element;
}

function Container({text, headerContent, mainContent}: ContainerProps) {
  return (
    <div className='container'>
        <div className='container-header'>
          {text
            ? <p>{text}</p> 
            : null
          }
            {headerContent} 
        </div>
        <div>
            {mainContent}
        </div>
    </div>
  );
}

export default Container;
