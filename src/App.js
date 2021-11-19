import "./App.css";
function App() {
  return (
    <div className="responsive">
      <div className="alerts">
        <h3>Grid system</h3>
        <div>
          Bootstrap’s grid system uses a series of containers, rows, and columns
          to layout and align content. It’s built with flexbox and is fully
          responsive. Below is an example and an in-depth look at how the grid
          comes together.
        </div>
        <div>
          New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide
          for background, terminology, guidelines, and code snippets.
        </div>
      </div>
      <div className="container">
        <h3>Container</h3>
        <div>
          Containers provide a means to center and horizontally pad your site’s
          contents. Use Container for a responsive pixel width.
        </div>
        <div className="container-1">
          <div>1 of 1</div>
        </div>
      </div>
      <div className="columns">
        <h3>Auto-layout columns</h3>
        <div>
          When no column widths are specified the Col component will render
          equal width columns
        </div>
        <div className="container__main-1">
          <div className="container__12-1-2">
            <div className="container__8__left-1-2">1 of 2 case 1</div>
            <div className="container__4__right-1-2">2 of 2 case 1</div>
          </div>
          <div className="container-1-2">
            <div className="container__left-1-2">1 of 2 case 2</div>
            <div className="container__right-1-2">2 of 2 case 2</div>
          </div>
          <div className="container-1-2-3">
            <div className="container__left-1-2-3">1 of 3 case 3</div>
            <div className="container__center-1-2-3">2 of 3 case 3</div>
            <div className="container__right-1-2-3">3 of 3 case 3</div>
          </div>
          <div className="container__case4-1-2-3">
            <div className="container__case4__left-1-2-3">1 of 3 case 4</div>
            <div className="container__case4__center-1-2-3">2 of 3 case 4</div>
            <div className="container__case4__right-1-2-3">3 of 3 case 4</div>
          </div>
          <div className="container__case5-1-2-3">
            <div className="container__case5__left-1-2-3"></div>
            <div className="container__case5__center-1-2-3">2 of 3 case 5</div>
            <div className="container__case5__right-1-2-3">3 of 3 case 5</div>
          </div>
          <div className="container__case6-1-2-3">
            <div className="container__case6__left-1-2-3">1 of 3 case 6</div>
            <div className="container__case6__center-1-2-3">2 of 3 case 6</div>
            <div className="container__case6__right-1-2-3">3 of 3 case 6</div>
          </div>
          <div className="container__case7-1-2-3">
              <div className="container__case7__left-1-2-3">1 of 3 case 7</div>
              <div className="container__case7__center-1-2-3">
                2 of 3 case 7
              </div>
              <div className="container__case7__right-1-2-3">3 of 3 case 7</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
