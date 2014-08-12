casper.test.begin('check if site is live', 1, function suite(test){
//casper.test.begin('check if url is your blog', 1, function suite(test){
	casper.start('http://personal-blog-site.herokuapp.com/', function(){
		//this.echo(this.fetchText('.nav h1'));
	});

	casper.then(function(){
		test.assertHttpStatus(200, 'server is live');
		//test.assertTextExists('my blog', 'it is in fact, your blog');
	});

	casper.run(function(){
		test.done();
	});
});