import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import { Location, ArrowLeft } from "iconsax-react";
import { motion } from "framer-motion";
import Loader from "../Loader";
import Error from "../Error";
import { useState } from "react";

interface UserProfileInterface {
  user: any;
  data: any;
  profileError: any;
  repoError: any;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: "24px", opacity: 0 },
  show: { y: "0px", opacity: 1 },
};

function UserProfile({
  data,
  user,
  profileError,
  repoError,
}: UserProfileInterface) {
  const [showMenu, setShowMenu] = useState(false);

  if (!user || !data) return <Loader />;
  if (repoError || profileError) return <Error />;

  return (
    <div className={styles.app}>
      <div className={styles.user}>
        <div className={styles.header}>
          <div className={styles.container}>
            <Link to="/" className={styles.btn__back} data-title="Home">
              <ArrowLeft />
            </Link>
            <div className={styles.title}>Profile</div>
            <div className={styles.menu} data-show-menu={showMenu}>
              <button
                className={styles.btn__menu}
                title="menu button"
                onClick={() => setShowMenu(!showMenu)}
                onBlur={() => setShowMenu(false)}
              ></button>
              <nav className={styles.menu__nav}>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <a
                  href="https://github.com/gzkdev/octomigo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Code
                </a>
              </nav>
            </div>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.container}
        >
          <motion.div variants={item} className={styles.thumbnail}>
            <img src={user?.avatar_url} alt="User's Profile Photo" />
          </motion.div>
          <motion.div variants={item} className={styles.name}>
            {user?.name}
          </motion.div>
          <motion.a
            variants={item}
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.username}
          >
            @{user?.login}
          </motion.a>
          {user?.location && (
            <motion.div variants={item} className={styles.location}>
              <Location size={16} />
              {user?.location}
            </motion.div>
          )}
          {/* <div>{new Date(`${user?.created_at}`).toLocaleDateString()}</div> */}
        </motion.div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.title}>Profile Stats</div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className={styles.stats}
            >
              <motion.div variants={item} className={styles.stat}>
                <div className={styles.number}>{user?.following}</div>
                <div className={styles.text}>Following</div>
              </motion.div>
              <motion.div variants={item} className={styles.stat}>
                <div className={styles.number}>{user?.followers}</div>
                <div className={styles.text}>Followers</div>
              </motion.div>
              <motion.div variants={item} className={styles.stat}>
                <div className={styles.number}>{user?.public_repos}</div>
                <div className={styles.text}>Repositories</div>
              </motion.div>
            </motion.div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Repositories</div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className={styles.repos}
            >
              {data?.map((repo: any) => (
                <motion.li
                  initial={{ y: "64px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  className={styles.repo}
                  key={repo?.id}
                >
                  <a
                    href={`https://${repo?.html_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repo__name}
                  >
                    {repo?.name}
                  </a>
                  <div className={styles.repo__description}>
                    {repo?.description}
                  </div>
                  <div className={styles.repo__stats}>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Stars</div>
                      <div className={styles.number}>
                        {repo?.stargazers_count}
                      </div>
                    </div>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Forks</div>
                      <div className={styles.number}>{repo?.forks_count}</div>
                    </div>
                    <div className={styles.repo__stat}>
                      <div className={styles.text}>Watchers</div>
                      <div className={styles.number}>
                        {repo?.watchers_count}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
