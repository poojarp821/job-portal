# # from django.db import models

# # Create your models here.
# from django.db import models

# class Job(models.Model):
#     title = models.CharField(max_length=200)
#     company = models.CharField(max_length=200)
#     location = models.CharField(max_length=200)
#     description = models.TextField()
#     salary = models.IntegerField()

#     def __str__(self):
#         return self.title


# class Application(models.Model):
#     job = models.ForeignKey(Job, on_delete=models.CASCADE)
#     name = models.CharField(max_length=200)
#     email = models.EmailField()
#     resume = models.FileField(upload_to='resumes/')

#     def __str__(self):
#         return self.name


from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Application(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    resume = models.FileField(upload_to='resumes/',default='')  # uploaded files go here
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.job.title}"