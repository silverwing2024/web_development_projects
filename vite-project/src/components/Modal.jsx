import licatImage from "../assets/licat.png"

function Modal({onChange}) {
return(
    <>
      <div className ="modal_wrap">
          <div className ="cheer">
              <h1>화이팅!!♥♥♥</h1>
              <h3>당신의 꿈을 응원합니다!</h3>
          </div>
          <div className ="licat_img">
              <img src={licatImage} alt="라이캣 응원" />
          </div>
          <div className="btn">
              <button className ="close_btn" onClick={onChange}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
              <p>(그냥 닫기 버튼입니다.)</p>
          </div>
      </div>    
    </>
  );

}

export default Modal;