import { useState } from 'react'
//import './App.css'

function App() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <p style={{ overflow: 'hidden', maxHeight: expanded ? 'none' : `100px` }}>Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris. (Larry Wall) Good code is its own best documentation. (Steve McConnell) It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra) A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder) C++ : Where friends have access to your private members. (Gavin Russell Baker)

      19 Jan 2038 at 3:14:07 AM (End of the word according to Unix–2^32 seconds after January 1, 1970) Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra) There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)</p>
      <button onClick={() => setExpanded(!expanded)}>Show less</button>
    </div>
  )
}

export default App
