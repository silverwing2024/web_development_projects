import { useState } from 'react'
import clockImage from '../assets/clock.png'
import titeImage from '../assets/title.png'
import quotesImage from '../assets/quotes.png'
import clickImage from '../assets/click.png'
import loadingImage from '../assets/loading.png'
import Modal from './Modal'

function Contents() {

  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [inputJob, setInputJob] = useState(null)
  const [inputDays, setInputDays] = useState(0);
  const [resultDays, setResultDays] = useState(0);

  const job_HandleChange = (event) => {
    setInputJob(event.target.value);
  }

  const days_HandleChange = (event) => {
    setInputDays(event.target.value);
  }

  const handleClick = () => {

    setLoading(true);
    setInitial(false);
    setResultDays(10000/inputDays);

    setTimeout(()=>{

      setLoading(false);
    }, 1800);

  }

  const handleClick_Modal = () => {

    if(!showModal) setShowModal(true);
    else setShowModal(false);
  }

  const hadleClick_Share = () => {
    
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    }); 
  }


  return(
      <>
        <div className = "title">
          <img className="clock_img" src={clockImage} alt="background" />
            <div className="title_img">
                <img src={titeImage} alt="1만 시간의 법칙" />
            </div>
        </div>
        <div className="intro">
          <div className="intro_saying">연습은 어제의 당신보다 당신을 더 낫게 만든다.</div>
            <div className="explain">
              <div className="quotes">
                <img src={quotesImage} alt="따옴표" />
                  <p>
                    <span>1만 시간의 법칙</span>은<br />어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                  </p>
              </div>
            </div>
        </div>
        <div className="inputs">
          <div className="field">
            <p>나는</p>
            <input id="field_value" value={inputJob} onChange={job_HandleChange} type="text" placeholder="예)프로그래밍" />
            <p>전문가가 될 것이다.</p>
          </div>
          <div className="time">
            <p>그래서 앞으로 매일 하루에</p>
            <div>
              <input id="time_value" value={inputDays} onChange={days_HandleChange}type="number" placeholder="예)5" />
              <p>시간씩 훈련할 것이다.</p>
            </div>
          </div>
        </div>
        <div className = "start">
          <div className = "btn_wrap">
              <button className = "start_btn" onClick={handleClick}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
              <div className = "click_img">
                  <img src={clickImage} alt="클릭" />
              </div>
          </div>
        </div>
        
        {loading?      
        <div className="result_loading">
          <div className="img_wrap">
              <img src={loadingImage} alt="로딩 중" />
          </div>
        </div>: initial?   <></>   :   <div className="result">
                  <div className="result_wrap">
                      <div>
                          당신은<span className="field_result">{inputJob}</span>전문가가 되기 위해서
                      </div>
                      <div>
                          대략<span className="time_result">{resultDays}</span>일 이상 훈련하셔야 합니다! :)
                      </div>
                  </div>
                  <div className="buttons">
                      <div className="go">
                          <button className="modal_btn" onClick={handleClick_Modal}>훈련하러 가기 GO!GO!</button>
                      </div>
                      <div className="share">
                          <button className="share_btn" onClick={hadleClick_Share}>공유하기</button>
                      </div>
                  </div>
                </div>                 
        }
        {showModal?  <Modal onChange = {handleClick_Modal}/>   : <></>  }
      </>
  );
}

export default Contents;