import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/client';

export default function Header() {
  const [session] = useSession();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn('github');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header>
      <nav>
        <Link href='/'>
          <a>DevToolsList</a>
        </Link>
        <ul>
          <li>
            {session ? (
              <>
                <img
                  src={session.user.image}
                  alt='Avatar'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid hsl(88deg, 60%, 85%)',
                  }}
                />
                <Link href='/'>
                  <a onClick={handleLogout}>Logout</a>
                </Link>
              </>
            ) : (
              <Link href='/'>
                <a onClick={handleLogin}>Login</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
