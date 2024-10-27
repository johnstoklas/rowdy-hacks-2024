import React, { useState } from 'react';
import './index.scss';

const Health = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [overallOpen, setOverallOpen] = useState(false);

  const handleToggle = (item) => {
    setActiveItems((prev) => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleOverall = () => {
    setOverallOpen(!overallOpen);
  };

  return (
    <nav>
      <button onClick={toggleOverall}>Overall Metrics</button>
      {overallOpen && (
        <div className="overall-dropdown">
          <p>Overall Heart Rate</p>
          <p>Overall Step Count</p>
          <p>Overall Calories</p>
          <p>Overall Water Intake</p>
          <p>Overall Sleep</p>
          <p>Overall Stress Levels</p>
        </div>
      )}
      <ul className="menu">
        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-heart-rate')}>Weekly Heart Rate</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-heart-rate') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-heart-rate-grade">Grade:</label>
                <input type="text" id="weekly-heart-rate-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers weekly heart rate metrics.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-heart-rate')}>Monthly Heart Rate</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-heart-rate') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-heart-rate-grade">Grade:</label>
                <input type="text" id="monthly-heart-rate-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers monthly heart rate metrics.</span></p>
              </div>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-step-count')}>Weekly Step Count</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-step-count') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-step-count-grade">Grade:</label>
                <input type="text" id="weekly-step-count-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers weekly step count metrics.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-step-count')}>Monthly Step Count</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-step-count') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-step-count-grade">Grade:</label>
                <input type="text" id="monthly-step-count-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers monthly step count metrics.</span></p>
              </div>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-calories')}>Weekly Calories</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-calories') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-calories-grade">Grade:</label>
                <input type="text" id="weekly-calories-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers weekly calorie metrics.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-calories')}>Monthly Calories</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-calories') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-calories-grade">Grade:</label>
                <input type="text" id="monthly-calories-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers monthly calorie metrics.</span></p>
              </div>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-water')}>Weekly Water Intake</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-water') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-water-grade">Grade:</label>
                <input type="text" id="weekly-water-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers weekly water intake metrics.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-water')}>Monthly Water Intake</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-water') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-water-grade">Grade:</label>
                <input type="text" id="monthly-water-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers monthly water intake metrics.</span></p>
              </div>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-sleep')}>Weekly Sleep</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-sleep') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-sleep-grade">Grade:</label>
                <input type="text" id="weekly-sleep-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers weekly sleep metrics.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-sleep')}>Monthly Sleep</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-sleep') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-sleep-grade">Grade:</label>
                <input type="text" id="monthly-sleep-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section covers monthly sleep metrics.</span></p>
              </div>
            </div>
          </div>
        </li>

        <li className="item">
          <div className="dropdown-row">
            <span className="dropdown-toggle" onClick={() => handleToggle('weekly-stress')}>Weekly Stress</span>
            <div className={`dropdown-content ${activeItems.includes('weekly-stress') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="weekly-stress-grade">Grade:</label>
                <input type="text" id="weekly-stress-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section evaluates weekly stress levels.</span></p>
              </div>
            </div>
            <span className="dropdown-toggle" onClick={() => handleToggle('monthly-stress')}>Monthly Stress</span>
            <div className={`dropdown-content ${activeItems.includes('monthly-stress') ? 'active' : ''}`}>
              <div className="content">
                <label htmlFor="monthly-stress-grade">Grade:</label>
                <input type="text" id="monthly-stress-grade" placeholder="Enter grade" />
                <div className="graph">Graph Placeholder</div>
                <p>Description: <span>This section evaluates monthly stress levels.</span></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Health;