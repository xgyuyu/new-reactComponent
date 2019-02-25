import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button from './button/Button.tsx'
// import Test from './test/Test'
const App = () => {
    console.log(<Button>123</Button>)
    // console.log(Test)
    return (
      <div>
        <Button
          text={'大号按钮'}
          type={'default'}
          size='lg'
          onClick={() => { console.log('我点了！！！') }}
        />
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('app'))