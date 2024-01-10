import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resource from '../resources/quizQuestion.json';

const Mainpage = ({ scoreUpdate, countUpdate }) => {
    const [state, setState] = useState({
        q: resource[0].question,
        opta: resource[0].optionA,
        optb: resource[0].optionB,
        optc: resource[0].optionC,
        optd: resource[0].optionD,
        ans: resource[0].answer,
        ct: 0,
        qn: 1,
    });

    const [score, setScore] = useState(0);

    const checkAns = (e) => {
        const { ans } = state;
        console.log(e.target.innerHTML, 'ans =', ans);
        if (e.target.innerHTML === ans) {
            alert('Correct Answer');
            setScore(score + 1);
        } else {
            alert('Wrong Answer');
        }
        nextque();
    };

    const nextque = () => {
        const { ct, qn } = state;
        if (ct + 1 < resource.length) {
            setState({
                q: resource[ct + 1].question,
                opta: resource[ct + 1].optionA,
                optb: resource[ct + 1].optionB,
                optc: resource[ct + 1].optionC,
                optd: resource[ct + 1].optionD,
                ans: resource[ct + 1].answer,
                ct: ct + 1,
                qn: qn + 1,
            });
        }
        if (state.qn === 15) {
            alert('End of the quiz');
        }
    };

    const prevque = () => {
        const { ct, qn } = state;
        if (ct - 1 >= 0) {
            setState({
                ct: ct - 1,
                q: resource[ct - 1].question,
                opta: resource[ct - 1].optionA,
                optb: resource[ct - 1].optionB,
                optc: resource[ct - 1].optionC,
                optd: resource[ct - 1].optionD,
                ans: resource[ct - 1].answer,
                qn: qn - 1,
            });
        }
    };

    const quit = () => {
        alert('Are you sure you want to Quit?');

        scoreUpdate(score);
        countUpdate(state.qn);
    };

    return (
        <div className='main-body'>
            <h1>Question</h1>
            <h5>{state.qn} of 15</h5>
            <h3>{state.q}</h3>
            <div className='mcq'>
                <div>
                    <button onClick={checkAns}>{state.opta}</button>
                    <button onClick={checkAns}>{state.optb}</button>
                </div>
                <div>
                    <button onClick={checkAns}>{state.optc}</button>
                    <button onClick={checkAns}>{state.optd}</button>
                </div>
            </div>
            <div className='options'>
                <button className='prev' onClick={prevque}>
                    Previous
                </button>
                <button className='nxt' onClick={nextque}>
                    Next
                </button>
                <Link to='/results'>
                    <button className='quit' onClick={quit}>
                        Quit
                    </button>
                </Link>
                <Link to='/results'>
                    <button>Finish</button>
                </Link>
            </div>
        </div>
    );
};

export default Mainpage;
