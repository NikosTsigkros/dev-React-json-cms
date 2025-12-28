// Users Module - Defines the users list and form views

const UsersModule = {
  views: {
    list: {
      api: {
        view: '/api/users'
      },
      template: 'list',
      primaryKey: 'id',
      fields: {
        id: {
          type: 'label',
          alias: 'id',
          label: 'ID'
        },
        name: {
          type: 'text',
          alias: 'name',
          label: 'Name'
        },
        email: {
          type: 'text',
          alias: 'email',
          label: 'Email'
        },
        role: {
          type: 'label',
          alias: 'role',
          label: 'Role'
        },
        edit: {
          type: 'button',
          alias: 'edit',
          caption: 'Edit',
          attributes: {
            className: 'btn btn-primary'
          },
          events: {
            onClick() {
              alert(`Edit clicked for user ID: ${this.props.primaryKeyValue}`);
              console.log('User data:', this.props.data);
            }
          }
        }
      }
    },
    form: {
      api: {
        view: '/api/users/{id}',
        update: '/api/users/{id}'
      },
      template: 'form',
      primaryKey: 'id',
      fields: {
        id: {
          type: 'label',
          alias: 'id',
          label: 'ID',
          attributes: {
            className: 'form-control'
          }
        },
        name: {
          type: 'text',
          alias: 'name',
          label: 'Name',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter name'
          }
        },
        email: {
          type: 'text',
          alias: 'email',
          label: 'Email',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter email',
            type: 'email'
          }
        },
        role: {
          type: 'text',
          alias: 'role',
          label: 'Role',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter role'
          }
        },
        bio: {
          type: 'text',
          alias: 'bio',
          label: 'Bio',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter bio'
          }
        }
      }
    }
  }
};

export default UsersModule;

