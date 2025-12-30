const User = {
  name: 'Jane Doe',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fslSLvppeV6MdgVN0NgvNcH7EISPNRJ1c7F1Qld6Ff1DxbhI0uw_Yn3gq1y_ihUUzSg&usqp=CAU',
  imageSize: 150,
};

export function Avatar() {
  return (
    <div>
      <h1>{ User.name }</h1>
      <img
        className="avatar"
        src={ User.imageUrl }
        alt={ 'Photo of ' + User.name }
        style={{
          width: User.imageSize,
          height: User.imageSize
        }}
      />
    </div>
  );
}
