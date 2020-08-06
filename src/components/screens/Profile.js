import React from 'react';

const Profile = () => {
  return (
    <div style={{ maxWidth: '550px', margin: '0px auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '18px 0px',
          borderBottom: '1px solid grey',
        }}
      >
        <div>
          <img
            style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
          />
        </div>
        <div>
          <h4>Pankaj Gupta</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '115%',
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className='gallery'>
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
        <img
          className='item'
          src='https://scontent.fccu11-1.fna.fbcdn.net/v/t1.0-9/56966801_2060939297287360_6805814042054098944_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=UBYxz7yaRQYAX_3x6C4&_nc_ht=scontent.fccu11-1.fna&oh=c347f52704c66e4aa5c3ef9a7f248a45&oe=5F522AF1'
        />
      </div>
    </div>
  );
};

export default Profile;
