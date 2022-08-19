import PropTypes from 'prop-types';
import ContactRow from './ContactRow';

export default function FullContacts({ users, removeUser, editUser }) {
  const contactRows = users.map((user, index) => (
    <ContactRow
      user={user}
      key={index}
      removeUser={removeUser}
      editUser={editUser}
    />
  ));
  return (
    <section className="contacts">
      <section className="row row__table-header">
        <div className="row__inner">
          <div className="row__image-box">
            <h2 className="row__image-header">Profile Picture</h2>
          </div>

          <div className="row__name-box">
            <h2 className="row__name-header">Name</h2>
          </div>

          <div className="row__email-box">
            <h2 className="row__email-header">Email</h2>
          </div>

          <div className="row__phone-box">
            <h2 className="row__phone-header">Phone Number</h2>
          </div>
        </div>
      </section>

      {contactRows}
    </section>
  );
}
FullContacts.propTypes = {
  users: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};
