import React from 'react'
import Navbar from '../components/Navbar';
import './Team.css'

function Team() {
  return (
    <>
      <Navbar />
      <div className="Team">
        <div className="slider">
          <div className="slides">
            <div className="slides-cont">
              <img src="https://i.pinimg.com/564x/5e/f2/a0/5ef2a0d853551eeebb1d7e572c3e1937.jpg" alt="" />
              <p>Cristian Capa</p>
            </div>

            <div className="slides-cont">
              <img src="https://i.pinimg.com/564x/10/40/69/1040699ab2f194b7906b065bf20605b0.jpg" alt="" />
              <p>Javier Aguilar</p>
            </div>

            <div className="slides-cont">
              <img src="https://i.pinimg.com/564x/a4/83/0e/a4830e6a69508b6105bb109ce1007660.jpg" alt="" />
              <p>Fabricio Yanangomez</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Team