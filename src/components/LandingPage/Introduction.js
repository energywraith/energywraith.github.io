import Typewriter from 'typewriter-effect';
import { IntroductionContainer, Name, Description } from './Introduction.style';

const getRandomNumberInRange = (min, max) => {
  return Math.ceil((Math.random() * (max - min) + min));
}

const misSpell = (string) => {
  const position = getRandomNumberInRange(1, string.length - 1)

  const misSpelledString = `${string.slice(0, position)}bd`
  const rest = string.slice(position, string.length)

  return [ misSpelledString, rest ]
}

const Introduction = () => {
  const [ misSpelledString, rest ] = misSpell("Adam Jałocha")

  return (
    <IntroductionContainer>
      <Name>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(misSpelledString)
              .pauseFor(100)
              .deleteChars(2)
              .typeString(rest)
              .pauseFor(1000)
              .callFunction(state => state.elements.cursor.style.display = "none")
              .start()
          }}
        />
      </Name>
      <Description>
        I am a self-taught front-end developer.
      </Description>
    </IntroductionContainer>
  )
}

export default Introduction