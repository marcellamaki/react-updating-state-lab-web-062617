
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleUpdateBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleUpdateResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });

  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleUpdateBitrate}
        >
          Change bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleUpdateResolution}
        >
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
