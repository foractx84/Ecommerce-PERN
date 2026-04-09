import authImage from '/images/banners/auth-image.jpg';

function AuthImagePanel() {
  return (
    <div className="flex-1">
      <img
        src={authImage}
        alt="Shopping cart and mobile phone"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

export default AuthImagePanel;