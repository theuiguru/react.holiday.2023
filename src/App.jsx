import * as React from 'react'
//import './App.css'

function ShowLess({ children }) {
  let [expanded, setExpanded] = React.useState(false);
  let [contentHeight, setContentHeight] = React.useState('none');
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    return setContentHeight(contentRef.current.scrollHeight);
  })

  const handleResize = () => {
    setContentHeight(contentRef.current.scrollHeight);
    console.log(Date.now);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <div>
      <div ref={contentRef} style={{ overflow: 'hidden', maxHeight: expanded ? contentHeight : `100px`, transition: 'all .5s ease'}}>
        { children }
      </div>
      {contentHeight > 100 ? (
        <button onClick={() => { setExpanded(!expanded); }}>Show {expanded ? 'less' : 'more'}</button>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <>
      <ShowLess>Hi there!</ShowLess>
      <ShowLess>
        <p>Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris. (Larry Wall) Good code is its own best documentation. (Steve McConnell) It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra) A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder) C++ : Where friends have access to your private members. (Gavin Russell Baker)</p>
        <p>19 Jan 2038 at 3:14:07 AM (End of the word according to Unix–2^32 seconds after January 1, 1970) Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra) There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)</p>
      </ShowLess>
    </>
  )
}
