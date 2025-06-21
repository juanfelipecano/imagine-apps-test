import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Toaster, toast } from 'sonner';
import { Button } from '../../../../components/common';
import { ApplicationData } from '../../../../config';
import { useStorage } from '../../../../hooks';
import '../../../../shared/css/forms.css';
import { Patterns } from '../../../../shared/utils';
import type { CredentialsEntity } from '../../entities';
import { useAuthentication } from '../../hooks';
import styles from './Auth.module.css';

export const Auth = () => {
  const { authenticate } = useAuthentication();
  const { setItem } = useStorage();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<CredentialsEntity>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onInputchange = (event: unknown) => {
    const target = (event as Event).target as HTMLInputElement;
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleLogin = async () => {
    if (!Patterns.email.test(formState.email)) {
      toast.error('Type a valid Email');
      return;
    }

    setIsLoading(true);

    try {
      const user = await authenticate(formState);
      await setItem(ApplicationData.user, user);
      navigate('/home', { replace: true });
    } catch {
      toast.error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={ styles.container }>

      <div className={ styles.container_inner }>
        <h1>Login</h1>

        <img src="/assets/img/login.svg" alt="Login" />

        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={ formState.email }
              onInput={ onInputchange }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={ formState.password }
              onInput={ onInputchange }
            />
          </div>

          <Button
            label="Login"
            disabled={ !formState.email || !formState.password }
            loading={ isLoading }
            click={ handleLogin }
          />
        </form>
      </div>

      <Toaster position="top-right" />
    </div>
  )
}
