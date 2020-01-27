@set PASSWORD=%1
@set USER=pfhd_alerya
@set SERVER=pfhd.ftp.infomaniak.com
@set REMOTEFOLDER=web/www
@set FULLURL=%USER%@%SERVER%:%REMOTEFOLDER%

@echo ----- DEPLOYING MTGMANAGER APP -----
@echo in %FULLURL%

@echo 1) Uploading files...
@rename build current
@pscp -pw %PASSWORD% -r current %FULLURL%
@rmdir /S /Q current

@echo All done!