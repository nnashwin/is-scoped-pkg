module.exports = (pkgName) => {
	const splitPkg = pkgName.split('/');
	return splitPkg.length > 1 && splitPkg[0][0] === '@';
}
