import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Container,
	Avatar,
	Button,
	Tooltip,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const pages = [
	{ title: 'Properties', link: '/' },
	{ title: 'Roommates', link: '/roommates' },
];

export default function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const router = useRouter();
	const auth = getAuth();
	// Todo: Rearrange these auth functions in firebase/auth.js
	const login = () => {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				const details = getAdditionalUserInfo(result);
				if (details.isNewUser) {
					router.push('/firstTimeUser');
				}
			})
			.catch((error) => {
				// Handle Errors here.
			});
	};
	const signout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				router.push('/');
			})
			.catch((error) => {});
	};
	const [user, loading] = useAuthState(auth);

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Roomie
					</Typography>
					{/* For small screen */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<Link href={page.link}>{page.title}</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Roomie
					</Typography>
					{/* For large screen */}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.title}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block', fontSize: 16 }}>
								<Link href={page.link}>{page.title}</Link>
							</Button>
						))}
					</Box>
					{user || loading ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar src={user?.photoURL} />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								<MenuItem key="profile" onClick={handleCloseUserMenu}>
									<Link href="/profile">Profile</Link>
								</MenuItem>
								<MenuItem key="friends" onClick={handleCloseUserMenu}>
									<Typography textAlign="center">
										<Link href="/friends">Friends</Link>
									</Typography>
								</MenuItem>
								<MenuItem key="logout" onClick={handleCloseUserMenu}>
									<Typography onClick={signout} textAlign="center">
										Log out
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					) : (
						<Button onClick={login} variant="contained" color="warning">
							Login
						</Button>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
