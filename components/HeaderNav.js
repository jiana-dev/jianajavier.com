import styles from './HeaderNav.module.css';

export default function HeaderNav(props) {
  let links = {
    'home': false,
    'blog': false,
    'resources': false,
    'podcasts': false,
    'journal': false,
    'contact': false
  }

  switch(props.activePage) {
    case 'home':
      links['home'] = true;
      break;
    case 'blog':
      links['blog'] = true;
      break;
    case 'resources':
      links['resources'] = true;
      break;
    case 'podcasts':
      links['podcasts'] = true;
      break;
    case 'journal':
      links['journal'] = true;
      break;
    case 'contact':
      links['contact'] = true;
      break;
  }

  return (
    <div className={styles.nav + " site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"} role="banner">
      <div className="container">
        <div className="d-flex align-items-center">
          <nav className="site-navigation position-relative" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto pl-0">
              <li className={`${links['home'] && "active"} option-first`}>
                <a href="/" className="nav-link text-left">Home</a>
              </li>
              <li className={links['blog'] && "active"}>
                <a href="/blogs" className="nav-link text-left">Blog</a>
              </li>
              <li className={links['resources'] && "active"}>
                <a href="/resources" className="nav-link text-left">Resources</a>
              </li>
              <li className={links['podcasts'] && "active"}>
                <a href="/podcasts" className="nav-link text-left">Podcasts</a>
              </li>
              <li className={links['journal'] && "active"}>
                <a href="/journal" className="nav-link text-left">Journal</a>
              </li>
              <li className={`${links['contact'] && "active"} option-last`}>
                <a href="/contact" className="nav-link text-left">Contact</a>
              </li>
            </ul>
          </nav>
          <style jsx>{`
          .site-navigation {
            width: 100%;
          }
          .site-menu {
            display: inline-flex;
            width: 100%;
            justify-content: space-between;
          }
          @media (min-width: 992px) {
            .option-first{
              margin-left: var(--default-padding);
            }
            .option-last{
              margin-right: var(--default-padding);
            }
          }

        `}</style>
        </div>
      </div>
    </div>
  )
}
