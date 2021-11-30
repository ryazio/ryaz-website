import FancyLabel from './fancyLabel';

function workFrame() {
  return (
    <>
      <div class="work-frame">
        <img class="" src="Group.svg" alt=""></img>
        <div class="work-block-text ff-brandon-light">Design a minimal and user-friendly for a community 
        where every opinion matters.
        </div>
        <div class="label-blk">
          <FancyLabel text="Designing" colorA="#DEAAFF" colorB="#D8BBFF" />
          <FancyLabel text="Frontend Development" colorA="#FEC5BB" colorB="#FAE1DD"/> 
          <FancyLabel text="Backend Development" colorA="#ABC4FF" colorB="#D3E0FF"/>

        </div>
      </div>
    </>
  )

}

export default workFrame;