import React from 'react';

// styles
import './Team.styles.scss';

// Assets
import ChefOne from '../../assets/team/chef-1.png';
import ChefTwo from '../../assets/team/chef-2.png';
import ChefThree from '../../assets/team/chef-3.png';
import ChefFour from '../../assets/team/chef-4.png';

const Team = () => (
    <div className="team">
        <div className="team-container">
            <h3>Our Team</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum</p>
        </div>
        <div className="team-images-container">
            <div className="team-image">
                <img src={ChefOne} alt="person" />
                <h3>Role</h3>
                <h4>Name Name</h4>
            </div>
            <div className="team-image">
                <img src={ChefTwo} alt="person" />
                <h3>Role</h3>
                <h4>Name Name</h4>
            </div>
            <div className="team-image">
                <img src={ChefThree} alt="person" />
                <h3>Role</h3>
                <h4>Name Name</h4>
            </div>
            <div className="team-image">
                <img src={ChefFour} alt="person" />
                <h3>Role</h3>
                <h4>Name Name</h4>
            </div>
            
        </div>
    </div>
)

export default Team;